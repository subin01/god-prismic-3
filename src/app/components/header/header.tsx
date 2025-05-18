
import { asText, filter } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";


export default async function Header() {
  const client = createClient();
  const header = await client.getByUID("header", "header").catch();


  return (
    <header>
      <p>{ header.data.logo}</p>
      <ul>
       { header.data.links.map((item) => <li key={item.link.id}><PrismicNextLink field={item.link} /></li>)}
       </ul>
       <hr/>
    </header>
  );
}
