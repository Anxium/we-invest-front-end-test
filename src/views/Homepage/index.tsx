import Header from "../../components/header";
import useGetPostsWithComments from "../../hooks/use-get-posts-with-comments";
import OtherUsers from "./other-users";
import PostGroup from "./post-group";

const HomepageView = () => {
  const { data, isLoading } = useGetPostsWithComments();

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header
        button={{
          text: "New post",
          mobileText: "Create a new post",
          onClick() {
            console.log("I clicked");
          },
        }}
      />

      <div className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <main className="lg:col-span-8">
            {!isLoading && data && <PostGroup posts={data} />}
          </main>

          <aside className="hidden lg:block lg:col-span-4">
            <OtherUsers />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default HomepageView;
