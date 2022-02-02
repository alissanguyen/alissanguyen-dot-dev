import * as React from "react";

const Funfacts: React.FC = () => {
  const [hover, setHover] = React.useState("");
  const handleHover = () => {
    if (hover === "") {
      setHover("hover");
    }
    if (hover === "hover") {
      setHover("");
    }
  };

  const facts = [
    {
      index: 1,
      title: "I love cats and I have two :)",
      description:
        "Their names are Rosie (girl) and Felix (boy). They are my love and energy to work",
      background:
        "https://images.unsplash.com/photo-1596854273338-cbf078ec7071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    },
    {
      index: 2,
      title: `I once applied to Harvard`,
      description:
        "Yeah.. It's a long story...but basically I got deferred haha",
      background:
        "https://images.unsplash.com/photo-1594394425161-bf2130df7875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    },
    {
      index: 3,
      title: "I am not afraid of snakes or spiders",
      description:
        "They are everywhere back when my family still lived in a rental house in Vietnam so that's why",
      background:
        "https://images.unsplash.com/photo-1621666156563-fc74e5b24695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80",
    },
    {
      index: 4,
      title: "I am a very ambitious person",
      description:
        "I used to think I can be the president of Europe. LMAO I was 10 years old at the time haha.",
      background:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_95-4Ia-BPhznv1oJN0jgp-Y9VB5IduzlT4VCgVY1GCrl_hmFfeWS35jR47jfZi9QGYw&usqp=CAU",
    },
    {
      index: 5,
      title: "My favorite subject was Math",
      description: "I guess the asian trait in me is right.",
      background:
        "https://images.theconversation.com/files/207820/original/file-20180226-140213-yox11e.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
    },
    {
      index: 6,
      title: "I unbelievably love mayonnaise!",
      description:
        "I can eat mayo with pretty much everything (except desserts since I'm not alien)",
      background:
        "https://www.vitamix.com/media/other/images/Vitamix-Mayonnaise-square-crop-Recovered__1.jpg",
    },
    {
      index: 7,
      title: "I play 3 musical instruments",
      description:
        "I used to play ukulele, piano, and organ, but nowadays I only play ukulele.",
      background:
        "https://images.squarespace-cdn.com/content/v1/5c2647463e2d09bae7d0ae76/1559217907662-TV5Y15KTYMC7V18CGD5M/Learn+an+instrument",
    },
    {
      index: 8,
      title: "I really like dad jokes but I sucks at them",
      description: "Here's one: ",
      background:
        "http://cdn.shopify.com/s/files/1/0024/4537/7647/products/TD-CT-TS-DAYS-COF_1_1200x630.jpg?v=1538170010",
    },
  ];

  return (
    <div className="FunFacts__Wrapper">
      <div className="FunFacts__Title__Wrapper inline-flex items-center">
        <span className="text-3xl font-semibold mb-5">
          Random fun facts about me
        </span>
      </div>

      <div className="wrapper">
        <div className="cols flex flex-wrap justify-between">
          {facts.map((fact) => (
            <div
              key={fact.index}
              className={`col ${hover} justify-between items-center cursor-auto my-5`}
              onTouchStart={handleHover}
            >
              <div className="container">
                <div
                  className="front flex justify-center items-center bg-cover text-center bg-center h-auto after:absolute after:top-0 after:left-0 after:w-full after:rounded-lg after:h-full after:block rounded-lg after:opacity-50"
                  style={{
                    backgroundImage: `url(${fact.background})`,
                  }}
                >
                  <div className="inner w-full box-border outline outline-1 outline-transparent px-4">
                    <p className="text-white relative after:absolute after:block after:left-0 after:right-0 text-4xl">
                      {fact.index}
                    </p>
                    <span className="text-white text-lg">{fact.title}</span>
                  </div>
                </div>
                <div className="back absolute top-0 flex left-0 w-full justify-center items-center bg-cover text-center bg-center h-auto bg-gray-100 rounded-lg">
                  <div className="inner w-full box-border outline outline-1 outline-transparent opacity-90 px-4">
                    <p className="p text-gray-900 opacity-100 text-lg">
                      {fact.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Funfacts;
