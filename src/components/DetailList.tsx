import { Text } from ".";

export const DetailList = ({
  children,
}: React.PropsWithChildren): React.ReactElement => <dl>{children}</dl>;

export const DetailListTitle = ({
  children,
}: React.PropsWithChildren): React.ReactElement => (
  <Text as="dt" className="text-theme-200 uppercase mb-[10px] ">
    {children}
  </Text>
);

export const DetailListItem = ({
  children,
}: React.PropsWithChildren): React.ReactElement => (
  <Text as="dd" color="default" size="sm">
    {children}
  </Text>
);

export const DetailListSpacer = () => <hr className="my-[23px]" />;
