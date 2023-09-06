import HomeCategory from "../HomeCategory/HomeCategory";
export default function HomeCategoryList({ categories }) {
  const items = categories.map((category) => (
    <HomeCategory category={category} />
  ));

  return (
    <div className="row">{items}</div>
);}
