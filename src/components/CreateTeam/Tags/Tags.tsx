import { useState } from "react";

import styles from "./Tags.module.scss";

const TagsInput = (props: any) => {
  const [tags, setTags] = useState(props.tags);

  const removeTags = (indexToRemove: any) => {
    setTags([...tags.filter((_: any, index: any) => index !== indexToRemove)]);
  };

  const addTags = (event: any) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <div className={styles.tagsInput}>
      <ul id={"tags"}>
        {tags !== undefined &&
          tags.map((tag: any, index: any) => (
            <li key={index} className={styles.tag}>
              <span className={styles.tagTitle}>{tag}</span>
              <span
                className={styles.tagCloseIcon}
                onClick={() => removeTags(index)}
              >
                x
              </span>
            </li>
          ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
        placeholder="Press enter to add tags"
      />
    </div>
  );
};

const Tags = () => {
  const selectedTags = (tags: any) => {
    console.log(tags);
  };
  return (
    <>
      <label className={styles.label}>Tags</label>
      <TagsInput selectedTags={selectedTags} tags={[]} />
    </>
  );
};

export default Tags;
