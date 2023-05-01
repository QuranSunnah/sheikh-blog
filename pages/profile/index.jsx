import { getSession } from "next-auth/react";

function ProfilePage(props) {
  return (
    <div>
      <h1>ProfilePage</h1>
      <p>{props.session.user.name}</p>
      <p>{props.session.user.email}</p>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default ProfilePage;
