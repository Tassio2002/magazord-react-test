'use client';

import Tabs from "./Tabs";
import FilterSection from "./FilterSection";
import RepoList from "./RepoList";

export default function Repos() {
    return (
        <div>
            <Tabs />
            <FilterSection />
            <RepoList />
        </div>
    )
}