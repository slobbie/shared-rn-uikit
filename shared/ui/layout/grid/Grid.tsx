import React, { createContext, useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  IGridItemProps,
  IGridProps,
} from '@shared/ui/layout/grid/grid.interface';

interface GridContextValue {
  columns: number;
  columnGap: number;
}

const GridContext = createContext<GridContextValue>({
  columns: 12,
  columnGap: 8,
});

/**
 * 그리드 레이아웃 컴포넌트
 */
const Grid: React.FC<IGridProps> & { Item: React.FC<IGridItemProps> } = ({
  columns = 12,
  gap = 8,
  rowGap,
  columnGap,
  children,
  style,
  ...props
}) => {
  const actualRowGap = rowGap ?? gap;
  const actualColumnGap = columnGap ?? gap;

  return (
    <GridContext.Provider value={{ columns, columnGap: actualColumnGap }}>
      <View
        style={[
          styles.grid,
          {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: -actualColumnGap / 2,
            marginVertical: -actualRowGap / 2,
          },
          style,
        ]}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(
              child as React.ReactElement<{ rowGap?: number }>,
              {
                rowGap: actualRowGap,
              },
            );
          }
          return child;
        })}
      </View>
    </GridContext.Provider>
  );
};

/**
 * 그리드 아이템 컴포넌트
 */
const GridItem: React.FC<IGridItemProps & { rowGap?: number }> = ({
  span = 1,
  rowGap = 8,
  children,
  style,
  ...props
}) => {
  const { columns, columnGap } = useContext(GridContext);
  const width = `${(span / columns) * 100}%` as `${number}%`;

  return (
    <View
      style={[
        {
          width,
          paddingHorizontal: columnGap / 2,
          paddingVertical: rowGap / 2,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

Grid.Item = GridItem;

const styles = StyleSheet.create({
  grid: {
    width: '100%',
  },
});

export default Grid;
