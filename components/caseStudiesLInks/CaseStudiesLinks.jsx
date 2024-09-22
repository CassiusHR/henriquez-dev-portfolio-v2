import Image from "next/image";

const LinkBar = ({ title = "", description = "", iconName = "Icon1", companyName = "", year = "" }) => {


  return (
    <div className="flex flex-row space-between items-center w-full h-full">
      <div className="flex flex-row space-between items-center w-full h-full">
        <div className="px-4 border border-neutral-400 border-y-0 border-l-0 border-r-1">
          <Image src={`/icons/${iconName}.svg`} alt={iconName} width={40} height={40} />
        </div>
        <div className="flex flex-col justify-center items-start w-full h-full px-4">
          <h3 className="text-md sm:text-xl font-bold">
            {title}
          </h3>
          <p className="text-sm sm:text-lg text-gray-800">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end w-1/4 sm:w-full h-full px-4">
        <span className="text-sm sm:text-md font-bold text-right">
          {companyName}
        </span>
        <span className="text-sm text-gray-800">
          {year}
        </span>
      </div>
    </div>
  );
};

export const CaseStudiesLinks = () => {
  return (
    <div className="border border-neutral-900 divide-y divide-neutral-900 w-full border-l-0 border-r-0 my-0">
      <div className="grid grid-cols-1 divide-x divide-neutral-900 h-32">
        <LinkBar title="A/B Testing without the pesky vendors" description="Corporate environtment? getting upselled on everything? Let's do something different." iconName="Icon1" companyName="Ria Money Transfer" year="2024" />
      </div>
      <div className="grid grid-cols-1 divide-x divide-neutral-900 h-32">
        <LinkBar title="Making a locations APP that works for everyone" description="Whitelabeling an app, embedding capabilities" iconName="Icon7" companyName="Ria Money Transfer" year="2022" />
      </div>
      <div className="grid grid-cols-1 divide-x divide-neutral-900 h-32">
        <LinkBar title="Making your marketing content team's life easier" description="The untold burdens of internationalization" iconName="Icon2" companyName="Ria Money Transfer" year="2022" />
      </div>
      <div className="grid grid-cols-1 divide-x divide-neutral-900 h-32">
        <LinkBar title="Improving Developtment/Product/QA/DevOps workflow" description="Taking advantage of the latest tech to make everyone's life easier" iconName="Icon3" companyName="Ria Money Transfer" year="2021" />
      </div>
      <div className="grid grid-cols-1 divide-x divide-neutral-900 h-32">
        <LinkBar title="PHP >> React >> PreRender >> NextJS" description="Corporate journey of upgrading tech stack" iconName="Icon4" companyName="Xe.com" year="2021" />
      </div>
      <div className="grid grid-cols-1 divide-x divide-neutral-900 h-32">
        <LinkBar title="Making an international public site from scratch" description="An opportunity to use the latest tech to make something great" iconName="Icon5" companyName="Ria Money Transfer" year="2021" />
      </div>
      <div className="grid grid-cols-1 divide-x divide-neutral-900 h-32">
        <LinkBar title="Stoic Monolith vs a creative UX Team" description="New ideas, concepts, designs, and a new way of working" iconName="Icon6" companyName="WOM" year="2018" />
      </div>

    </div>
  );
};
