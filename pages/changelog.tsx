import { resolve } from 'path';
import { readFile } from 'fs/promises';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const Changelog = ({
  changelog,
}: // eslint-disable-next-line no-use-before-define
InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="section">
      <div className="container box">
        <div className="content">
          <pre>{changelog}</pre>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  changelog: string,
}> = async () => {
  const changelog = await readFile(resolve(process.cwd(), 'CHANGELOG.md'), {
    encoding: 'utf-8',
  });

  return {
    props: {
      changelog,
    },
  };
};

export default Changelog;
