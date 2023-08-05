import FormSection from './components/form-section/FormSection';
import SearchResultSection from './components/search-result-section/SearchResultSection';

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative">
      <FormSection />
      <SearchResultSection />
    </div>
  );
}
