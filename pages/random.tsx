import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getWeightedRandomPick, Trait, traits } from '@/traits';
import { useTranslation } from '@/translation/useTranslation';
import HtmlContent from '@/components/HtmlContent';

const Random = ({
  trait,
}: // eslint-disable-next-line no-use-before-define
InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const t = useTranslation();

  return (
    <>
      <div className="section">
        <div className="container is-max-desktop">
          <div className="card">
            <div className="card-header">
              <div className="card-header-title">
                <p className="title">{t(`traits:${trait}.title`)}</p>
              </div>
            </div>
            <div className="card-content">
              <div className="section">
                <HtmlContent
                  className="content is-medium"
                  html={t(`traits:${trait}.description`)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  trait: string,
}> = async () => {
  const trait = getWeightedRandomPick(
    traits
    .filter((t): t is Trait<'weighted'> => !('deprecated' in t)));
  
  return {
    props: {
      trait: trait.id,
    },
  };
};

export default Random;
