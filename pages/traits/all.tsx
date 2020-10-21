import { traits } from '@/traits';
import { useTranslation } from '@/translation/useTranslation';

const Traits = () => {
  const t = useTranslation();

  const allTraits = traits
    .sort(
      (
        { id: idA, deprecated: aDeprecated },
        { id: idB, deprecated: bDeprecated },
      ) => {
        if (aDeprecated && !bDeprecated) return 1;
        if (!aDeprecated && bDeprecated) return -1;

        if (idA < idB) return -1;
        if (idA > idB) return 1;

        return 0;
      },
    );

  return (
    <>
      <div className="section">
        <div className="container is-max-widescreen">
          <div className="columns is-multiline">
            {allTraits.map((trait) => (
              <div key={trait.id} className="column is-12 is-6-desktop is-4-widescreen">
                <div
                  className={[
                    'card',
                    trait.deprecated ? 'has-background-grey-light' : '',
                  ].join(' ')}
                  style={{ height: '100%' }}
                >
                  <div className="card-header">
                    <div className="card-header-title">
                      <p className="title">{t(`traits:${trait.id}.title`)}</p>
                    </div>
                  </div>
                  <div className="card-content">
                    <div
                      className="content px-2 pb-2"
                      dangerouslySetInnerHTML={{
                        __html: t(`traits:${trait.id}.description`),
                      }}
                    />
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

export default Traits;
