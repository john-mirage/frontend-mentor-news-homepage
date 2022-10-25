import LatestArticle from "@components/LatestArticle";
import classes from "./LatestArticleList.module.css";
import { clsx } from "clsx";
import latestArticles from "@data/latest-articles.json";

interface Props {
  className?: string;
}

const LatestArticleList = ({ className = "" }: Props) => {
  return (
    <section className={clsx(className, classes.container)}>
      <h2 className={classes.title}>New</h2>
      <ul className={classes.list}>
        {latestArticles.map((latestArticle) => (
          <LatestArticle
            key={latestArticle.name}
            link={latestArticle.link}
            name={latestArticle.name}
            excerpt={latestArticle.excerpt}
          />
        ))}
      </ul>
    </section>
  );
};

export default LatestArticleList;
