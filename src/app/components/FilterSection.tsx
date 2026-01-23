import MultiSelectDropdown from "./MultiSelectDropdown";
import SearchBar from "./SearchBar";
import { useFilterStore } from "../store/FilterStore";

export default function FilterSection() {
    const { selectedTypes, selectedLanguages, setSelectedTypes, setSelectedLanguages } = useFilterStore();
    const typeOptions = [
        { id: 'all', label: 'All' },
        { id: 'sources', label: 'Sources' },
        { id: 'forks', label: 'Forks' },
        { id: 'archived', label: 'Archived' },
        { id: 'mirrors', label: 'Mirrors' },
    ];

    const languageOptions = [
        { id: 'all', label: 'All' },
        { id: 'javascript', label: 'JavaScript' },
        { id: 'typescript', label: 'TypeScript' },
        { id: 'python', label: 'Python' },
        { id: 'java', label: 'Java' },
    ];
    return (
        <div className="flex justify-between mt-12">
            <SearchBar />
            <div className="flex gap-4">
                <MultiSelectDropdown
                    buttonLabel="Type"
                    options={typeOptions}
                    selectedValues={selectedTypes}
                    onSelectionChange={setSelectedTypes} 
                />
                <MultiSelectDropdown 
                    buttonLabel="Language" 
                    options={languageOptions} 
                    selectedValues={selectedLanguages}
                    onSelectionChange={setSelectedLanguages}
                />
            </div>
        </div>
    )
}