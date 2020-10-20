import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import sample from 'lodash/fp/sample';
import { useTranslation } from '@/components/Translation';
import { traits } from '@/traits';

const Random = ({
  role,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const t = useTranslation();

  return (
    <>
      <div className="section">
        <div className="container is-max-desktop">
          <div className="card">
            <div className="card-header">
              <div className="card-header-title">
                <p className="title">{t(`roles:${role}.title`)}</p>
              </div>
            </div>
            <div className="card-content">
              <div className="section">
                <div
                  className="content is-medium"
                  dangerouslySetInnerHTML={{
                    __html: t(`roles:${role}.description`),
                  }}
                />
              </div>
            </div>
            <div className="card-footer">
              <Link href="/">
                <a className="card-footer-item">{t('back')}</a>
              </Link>
              <Link href="/random">
                <a className="card-footer-item">{t('newTrait')}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  role: string;
}> = async () => {
  const role = sample(traits);

  return {
    props: {
      role: role,
    },
  };
};

export default Random;
