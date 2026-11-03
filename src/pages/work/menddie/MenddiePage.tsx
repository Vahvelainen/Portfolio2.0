import { Gallery } from "@/components/work/Gallery";
import { WorkArticle } from "@/components/work/WorkArticle";

export function MenddiePage() {
  return (
    <WorkArticle
      cover={{
        src: "/images/menddie.png",
        alt: "Old Menddie mobileviews designed by Leevi Vahvelainen",
      }}
    >
      <h1>Menddie.com</h1>

      <p>
        Menddie is an ecommerce platform for repair services. More precisely, a marketplace for
        tailors and sewing services to sell repairs for clothing items, with online payment and
        delivery both ways from customer to service providers and back.
      </p>

      <p>
        The platform had all the functionalities expected from an online marketplace. Customers
        could choose between pre-listed repair prices or as a quote for more complicated jobs.
      </p>

      <p>
        Menddie is a startup founded originally by Leevi Vahvelainen (Me) and Henri Kämäräinen in
        late 2019. Leevi did the design work for the platform and the service, while Henri focussed
        the business side. Later additions to the developing team where Elias Ojala and Simo
        Naatula, both doing software development.
      </p>

      <h2>Key features the platform included:</h2>
      <ul>
        <li>Ability to list and find pre-priced repair services</li>
        <li>Quote asking system between customers and service providers</li>
        <li>Online payment and order experience</li>
        <li>Immediate 7-digit delivery code after purchase</li>
        <li>Service provider review and reting</li>
      </ul>

      <Gallery
        images={[
          { src: "/images/menddie/Group 8.png", alt: "Menddie repair listing" },
          { src: "/images/menddie/Group 13.png", alt: "Menddie repair service page" },
          { src: "/images/menddie/Group 5.png", alt: "Menddie service provider profile" },
        ]}
      />
      <h2>Pre-priced repairs</h2>

      <p>
        The first and arguably the more important feature of the online buying experience. The very
        first challenge in listing repair prices was the way they need to be categorized. The
        solution was structured in the same way as a discussion with a tailor.
      </p>

      <ol>
        <li>What is it that you have?</li>
        <li>What&#39;s broken with it?</li>
        <li>How do you want it to be fixed?</li>
      </ol>

      <Gallery
        images={[
          { src: "/images/menddie/Group 3.png", alt: "Choosing the item to repair" },
          { src: "/images/menddie/Group 1.png", alt: "Choosing what is broken" },
          { src: "/images/menddie/Group 2.png", alt: "Choosing how to fix it" },
        ]}
      />
      <h3>Service provider back-office for listing repairs</h3>

      <Gallery
        images={[
          { src: "/images/menddie/Group 6.png", alt: "Back-office repair list" },
          { src: "/images/menddie/Group 4.png", alt: "Back-office repair editor" },
          { src: "/images/menddie/Group 14.png", alt: "Back-office pricing" },
        ]}
      />
      <h2>Quoting system</h2>

      <p>
        Originally developed to gain information about what is missing from the listings. A way to
        ask quotes from the service providers proved to be an excellent way to order the more unique
        repair jobs.
      </p>

      <p>
        Customers would simply leave a request and in the time span of three days they would get
        offers to their emails with a direct link to go and purchase the offered repair.
      </p>

      <Gallery images={[{ src: "/images/menddie/Group 10.png", alt: "Quote request form" }]} />
      <h2>Cart & Checkout</h2>
      <p>The customerr experience was tied together with a very sophisticated checkout process.</p>
      <Gallery
        images={[
          { src: "/images/menddie/Group 7.png", alt: "Shopping cart" },
          { src: "/images/menddie/Group 12.png", alt: "Checkout details" },
          { src: "/images/menddie/Group 9.png", alt: "Payment" },
          { src: "/images/menddie/Group 11.png", alt: "Order confirmation with delivery code" },
        ]}
      />
      <h2>Later pivot</h2>

      <p>
        After I (Leevi) left the company, the focus shifted towards working with clothing brands in
        order to provide brand specific repair services.
      </p>
    </WorkArticle>
  );
}
