import Link from 'next/link';
import { useTranslation } from '@/translation/useTranslation';
import HtmlContent from '@/components/HtmlContent';

const Index = () => {
  const t = useTranslation();

  return (
    <>
      <div className="section">
        <div className="container box">
          <HtmlContent className="content is-medium" html={t('content.why')} />
          <HtmlContent className="content is-medium" html={t('content.how')} />
          <div className="content has-text-centered">
            <Link href="/random">
              <button type="button" className="button is-dark is-medium">
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
