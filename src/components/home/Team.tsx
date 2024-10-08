const Team = () => {
  return (
    <section className="">
      <div className="container px-6 py-8 mx-auto">
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-rose-600 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Meet our team
          </span>
          <h2 className="block w-full font-bold text-3xl sm:text-4xl text-gray-700">
            The Faces Behind Our Journey
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl  text-center text-gray-400">
            Our GoDrive team is a passionate group of professionals dedicated to
            providing you with a seamless car rental experience.
          </p>
        </div>

        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="w-full max-w-xs text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
              alt="avatar"
            />

            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700">Ahmed Omer</h3>
              <span className="mt-1 font-medium text-gray-600 ">CEO</span>
            </div>
          </div>

          <div className="w-full max-w-xs text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="avatar"
            />

            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700">Jane Doe</h3>
              <span className="mt-1 font-medium text-gray-600 ">
                Co-founder
              </span>
            </div>
          </div>

          <div className="w-full max-w-xs text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
              alt="avatar"
            />

            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700">Steve Ben</h3>
              <span className="mt-1 font-medium text-gray-600">UI/UX</span>
            </div>
          </div>

          <div className="w-full max-w-xs text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="avatar"
            />

            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700">
                Patterson Johnson
              </h3>
              <span className="mt-1 font-medium text-gray-600">
                Software Engineer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
