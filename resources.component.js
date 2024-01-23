import React from 'react';
import { SafeAreaView, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Layout, Text, Card, List } from '@ui-kitten/components';

export const ResourcesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ListCustomItemShowcase/>
    </SafeAreaView>
  );
};

const data = new Array(8).fill({
  title: 'Item',
});

export const ListCustomItemShowcase = (): React.ReactElement => {

  const renderItemHeader = (headerProps, info: ListRenderItemInfo<{ title: string }>): React.ReactElement => (
    <View {...headerProps}>
      <Text category='h6'>
        {`${info.item.title} ${info.index + 1}`}
      </Text>
    </View>
  );

  const renderItemFooter = (footerProps): React.ReactElement => (
    <Text {...footerProps}>
      By Wikipedia
    </Text>
  );

  const renderItem = (info): JSX.Element => (
    <Card
      style={styles.item}
      status='basic'
      header={headerProps => renderItemHeader(headerProps, info)}
      footer={renderItemFooter}
    >
      <Text>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
      </Text>
    </Card>
  );

  return (
    <List
      contentContainerStyle={styles.contentContainer}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});