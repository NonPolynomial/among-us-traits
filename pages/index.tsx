import Link from 'next/link';
import { useTranslation } from '@/translation/useTranslation';

const Index = () => {
  const t = useTranslation();

  return (
    <>
      <div className="section">
        <div className="container box">
          <div
            className="content is-medium"
            dangerouslySetInnerHTML={{ __html: t('content.why') }}
          />
          <div
            className="content is-medium"
            dangerouslySetInnerHTML={{ __html: t('content.how') }}
          />
          <div className="content has-text-centered">
            <Link href="/random">
              <button className="button is-dark is-medium">
                {t('getTrait')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
