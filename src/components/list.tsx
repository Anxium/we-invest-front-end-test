const List = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2
          id="who-to-follow-heading"
          className="text-base font-medium text-gray-900"
        >
          Other users
        </h2>
        <div className="mt-6 flow-root">
          <ul role="list" className="-my-4 divide-y divide-gray-200">
            <li className="flex items-center py-4 space-x-3">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  <a href="#">Leonard Krasner</a>
                </p>
                <p className="text-sm text-gray-500">
                  <a href="#" className="hover:underline">
                    @driesvincent
                  </a>
                </p>
              </div>
            </li>

            {/* More users... */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;
