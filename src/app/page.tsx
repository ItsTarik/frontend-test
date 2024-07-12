"use server";

import React from "react";
import { NewslettersHeader } from "@/components/newsletter/newslettersHeader";
import { NewsletterSiteList } from "@/components/newsletter/newsletterSiteList";
import { SimulateUserRight } from "@/components/simulateUserRight";
import { groupNewsletterBySite } from "@/utils/groupNewsletterBySite";
import { apiClient } from "@/http/apiClient";

const NewslettersPage = async () => {
  const currentUser = await apiClient.getCurrentUser();
  const newsletters = await apiClient.getNewsletters();
  const groupedBySite = groupNewsletterBySite(newsletters);

  return (
    <>
      <main className="lg:mt-5 lg:mx-0 md:mx-2 mx-1 mt-0 relative">
        <NewslettersHeader />
        <ul>
          {Object.entries(groupedBySite).map(([site, newletters]) => (
            <li className="mt-2" key={site}>
              <NewsletterSiteList
                user={currentUser}
                site={site}
                items={newletters}
              />
            </li>
          ))}
        </ul>
        <SimulateUserRight user={currentUser} />
      </main>
      {/* <pre className="bg-slate-300 rounded-md p-2 absolute left-2 top-2">
        {JSON.stringify(currentUser, null, 4)}
      </pre> */}
    </>
  );
};

export default NewslettersPage;
