import Header from "@/components/layout/Header";
const Users: React.FC = () => {
  return (
    <>
      <Header />
      <div className="p-4">Users Page</div>
    </>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}
