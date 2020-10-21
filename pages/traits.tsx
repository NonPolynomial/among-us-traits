import { useTranslation } from '@/components/Translation';
import { traits } from '@/traits';

const Traits = () => {
  const t = useTranslation();

  const filtered = traits.filter(({ deprecated }) => !deprecated).sort();

  return (
    <>
      <div className="section">
        <div className="container is-max-widescreen">
          <div className="columns is-multiline">
            {filtered.map((trait) => (
              <div key={trait.id} className="column is-12 is-6-desktop is-4-widescreen">
                <div className="card" style={{ height: '100%' }}>
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
