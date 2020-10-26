/* eslint-disable react/no-danger */
type Props = {
  html: string,
} & { [key: string]: unknown };

const HtmlContent = ({ html, ...props }: Props) => (
  <div {...props} dangerouslySetInnerHTML={{ __html: html }} />
);

export default HtmlContent;
