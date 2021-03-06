import HtmlContent from '@/components/HtmlContent';
import { Trait, traits as allTraits, getWeightedPartialSums } from '@/traits';
import { useTranslation } from '@/translation/useTranslation';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const Traits = ({
  traits,
  maxWeight,
  // eslint-disable-next-line no-use-before-define
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const t = useTranslation();

  return (
    <>
      <div className="section">
        <div className="container is-max-desktop">
          <div className="columns is-multiline">
            {traits.map((trait) => (
              <div key={trait.id} className="column is-12 is-6-desktop">
                <div className="card" style={{ height: '100%' }}>
                  <div className="card-header">
                    <div className="card-header-title">
                      <p className="title is-size-4 is-size-3-desktop">{t(`traits:${trait.id}.title`)}</p>
                    </div>
                  </div>
                  <div className="card-content">
                    <HtmlContent
                      className="content is-size-5-tablet px-2 pb-2"
                      html={t(`traits:${trait.id}.description`)}
                    />
                  </div>
                  <div className="card-footer">
                    <div className="card-footer-item is-hidden-tablet">
                      <div className="tags has-addons">
                        <span className="tag is-dark">
                          {t('probability')}
                        </span>
                        <span className="tag is-primary is-light has-text-weight-bold">
                          {Number(trait.weight / maxWeight * 100).toFixed(2)}
                          %
                        </span>
                      </div>
                    </div>
                    <div className="card-footer-item is-hidden-mobile">
                      <div className="tags has-addons is-medium">
                        <span className="tag is-dark">
                          <abbr title={t('probability')}>prob.</abbr>
                        </span>
                        <span className="tag is-primary is-light has-text-weight-bold">
                          {Number(trait.weight / maxWeight * 100).toFixed(2)}
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  traits: Trait<'weighted'>[];
  maxWeight: number;
}> = async () => {
  const traits = allTraits
    .filter((trait): trait is Trait<'weighted'> => !('deprecated' in trait))
    .sort();
  const sums = getWeightedPartialSums(traits);
  return {
    props: {
      traits,
      maxWeight: Math.max(...sums),
    }
  }
};

export default Traits;
