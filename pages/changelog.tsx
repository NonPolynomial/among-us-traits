import path from 'path';
import { readFile } from 'fs';
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
  const changelog = await new Promise<string>((resolve, reject) => {
    readFile(
      path.resolve(process.cwd(), 'CHANGELOG.md'),
      {
        encoding: 'utf-8',
      },
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      },
    );
  });

  return {
    props: {
      changelog,
    },
  };
};

export default Changelog;
