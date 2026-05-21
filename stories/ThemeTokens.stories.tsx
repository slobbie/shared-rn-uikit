import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';

import { StorybookSurface } from '../.storybook/previewWrappers';
import { createTheme } from '@shared/utils/lib/createTheme';
import {
  background,
  colors,
  spacing,
  variant,
} from '@shared/utils/lib/themeToken';
import { typography } from '@shared/utils/lib/themeToken/typoToken';
import { materialTypographyStyles } from '@shared/utils/lib/themeToken/typoToken/typoToken';

type ThemeTokenStoryArgs = {
  sampleText: string;
};

const meta = {
  title: 'Foundations/Theme Tokens',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '기본 토큰, 시맨틱 매핑, 타이포 스케일, spacing 스케일을 Storybook에서 바로 확인하기 위한 foundation 페이지입니다.',
      },
    },
  },
  args: {
    sampleText: 'The quick brown fox jumps over the lazy dog.',
  },
  argTypes: {
    sampleText: {
      control: 'text',
      description: 'Typography preview sentence',
    },
  },
} satisfies Meta<ThemeTokenStoryArgs>;

export default meta;
type Story = StoryObj<ThemeTokenStoryArgs>;

const themePreview = createTheme({});
const typographyVariants = Object.entries(materialTypographyStyles) as Array<[
  keyof typeof materialTypographyStyles,
  (typeof materialTypographyStyles)[keyof typeof materialTypographyStyles],
]>;

type TokenGroup = Record<string, string | number>;

const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <View style={{ gap: 12 }}>
    <View style={{ gap: 4 }}>
      <Text style={{ fontSize: 20, fontWeight: '700', color: '#111827' }}>{title}</Text>
      {description ? (
        <Text style={{ fontSize: 13, lineHeight: 18, color: '#4B5563' }}>{description}</Text>
      ) : null}
    </View>
    {children}
  </View>
);

const SwatchGrid = ({ groups }: { groups: Array<{ title: string; values: TokenGroup }> }) => (
  <View style={{ gap: 16 }}>
    {groups.map((group) => (
      <View key={group.title} style={{ gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '700', color: '#1F2937' }}>{group.title}</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
          {Object.entries(group.values).map(([name, value]) => (
            <View
              key={`${group.title}-${name}`}
              style={{ width: 136, padding: 10, borderRadius: 12, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E5E7EB', gap: 8 }}
            >
              <View
                style={{
                  height: 56,
                  borderRadius: 10,
                  backgroundColor: String(value),
                  borderWidth: String(value).toLowerCase() === '#ffffff' ? 1 : 0,
                  borderColor: '#E5E7EB',
                }}
              />
              <View style={{ gap: 2 }}>
                <Text style={{ fontSize: 13, fontWeight: '600', color: '#111827' }}>{name}</Text>
                <Text style={{ fontSize: 12, color: '#6B7280' }}>{String(value)}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    ))}
  </View>
);

const SemanticGrid = ({
  groups,
}: {
  groups: Array<{ title: string; values: TokenGroup; textOnSwatch?: boolean }>;
}) => (
  <View style={{ gap: 16 }}>
    {groups.map((group) => (
      <View key={group.title} style={{ gap: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '700', color: '#1F2937' }}>{group.title}</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
          {Object.entries(group.values).map(([name, value]) => (
            <View
              key={`${group.title}-${name}`}
              style={{
                width: 148,
                padding: 12,
                borderRadius: 12,
                backgroundColor: String(value),
                borderWidth: 1,
                borderColor: '#E5E7EB',
                gap: 6,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '700',
                  color: group.textOnSwatch ? '#FFFFFF' : '#111827',
                }}
              >
                {name}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: group.textOnSwatch ? 'rgba(255,255,255,0.85)' : '#4B5563',
                }}
              >
                {String(value)}
              </Text>
            </View>
          ))}
        </View>
      </View>
    ))}
  </View>
);

const TypographyScalePreview = ({ sampleText }: { sampleText: string }) => {
  return (
    <View style={{ gap: 12 }}>
      {typographyVariants.map(([name, tokenRefs]) => {
        const fontSize = typography.fontSize[tokenRefs.fontSize];
        const lineHeight = typography.lineHeight[tokenRefs.lineHeight];
        const fontWeight = typography.fontWeight[tokenRefs.fontWeight];
        const letterSpacing = typography.letterSpacing[tokenRefs.letterSpacing];

        return (
          <View
            key={name}
            style={{
              gap: 6,
              paddingBottom: 12,
              borderBottomWidth: 1,
              borderBottomColor: '#E5E7EB',
            }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 12 }}>
              <Text style={{ fontSize: 13, fontWeight: '700', color: '#111827' }}>{name}</Text>
              <Text style={{ fontSize: 12, color: '#6B7280' }}>
                {fontSize}px / {lineHeight}px / {fontWeight}
              </Text>
            </View>
            <Text
              style={{
                color: themePreview.theme.colors.text.primary,
                fontSize,
                lineHeight,
                fontWeight: String(fontWeight) as never,
                letterSpacing,
                ...(tokenRefs && 'textTransform' in tokenRefs && tokenRefs.textTransform
                  ? { textTransform: tokenRefs.textTransform }
                  : {}),
              }}
            >
              {sampleText}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const SpacingScalePreview = () => (
  <View style={{ gap: 12 }}>
    {Object.entries(spacing).map(([name, value]) => (
      <View key={name} style={{ gap: 6 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 13, fontWeight: '700', color: '#111827' }}>{name}</Text>
          <Text style={{ fontSize: 12, color: '#6B7280' }}>{value}px</Text>
        </View>
        <View style={{ gap: 8 }}>
          <View style={{ height: 10, width: value * 12, borderRadius: 999, backgroundColor: '#2089dc' }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: 10, padding: 12 }}>
            <View style={{ width: 48, height: 24, borderRadius: 8, backgroundColor: '#111827' }} />
            <View style={{ width: value * 4 }} />
            <View style={{ width: 48, height: 24, borderRadius: 8, backgroundColor: '#9CA3AF' }} />
          </View>
        </View>
      </View>
    ))}
  </View>
);

export const Overview: Story = {
  render: (args) => (
    <View style={{ padding: 24, gap: 24, backgroundColor: '#F1F5F9' }}>
      <StorybookSurface width={960} padding={24} gap={24}>
        <Section
          title="Theme pipeline overview"
          description="base token → semantic theme → component usage 흐름을 Storybook에서 바로 확인할 수 있도록 foundation 기준 값을 모았습니다."
        >
          <View style={{ gap: 12 }}>
            <Text style={{ fontSize: 14, lineHeight: 22, color: '#334155' }}>
              - Base tokens: `variant`, `colors`, `background`, `typography`, `spacing`
            </Text>
            <Text style={{ fontSize: 14, lineHeight: 22, color: '#334155' }}>
              - Semantic theme: `theme.colors.text`, `theme.colors.background`, `theme.colors.button`, `theme.colors.border`
            </Text>
            <Text style={{ fontSize: 14, lineHeight: 22, color: '#334155' }}>
              - Current preview reflects `createTheme({})` default output
            </Text>
          </View>
        </Section>

        <Section
          title="Base color tokens"
          description="직접 관리하는 foundation 색상값입니다. 시맨틱 테마는 이 값을 조합해 만들어집니다."
        >
          <SwatchGrid
            groups={[
              { title: 'Variant', values: variant },
              { title: 'Colors', values: colors },
              { title: 'Background', values: background },
            ]}
          />
        </Section>

        <Section
          title="Semantic theme mapping"
          description="컴포넌트가 실제로 참조하는 시맨틱 색상 레이어입니다. 토큰 변경 영향 범위를 미리 확인하는 용도입니다."
        >
          <SemanticGrid
            groups={[
              { title: 'Text', values: themePreview.theme.colors.text },
              { title: 'Button', values: themePreview.theme.colors.button, textOnSwatch: true },
              { title: 'Border', values: themePreview.theme.colors.border },
              { title: 'Background', values: themePreview.theme.colors.background },
            ]}
          />
        </Section>

        <Section
          title="Typography scale"
          description="현재 `materialTypographyStyles`와 typography token이 결합된 실제 scale 미리보기입니다."
        >
          <TypographyScalePreview sampleText={args.sampleText} />
        </Section>

        <Section
          title="Spacing scale"
          description="spacing token 값과 상대적인 간격 차이를 한눈에 비교하기 위한 preview입니다."
        >
          <SpacingScalePreview />
        </Section>
      </StorybookSurface>
    </View>
  ),
};
