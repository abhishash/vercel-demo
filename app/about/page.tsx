"use client";
import { useEffect, useState } from "react";
interface DataType {
    id: number;
  userId: number;
  title: string;
  body: string;
}
const AboutPage = () => {
  const [data, setData] = useState<DataType[]>([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.API_URL}/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      setData(result);
    })();
  }, []);

  return (
    <div className="w-[90%] mx-auto mt-12">
      <h1 className="text-2xl font-bold text-center py-6 ">About PAge</h1>
      <p className="py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae unde consequatur tempora saepe officia. Amet, voluptatibus? Deserunt autem odio quae veniam sunt rerum minima, id incidunt velit ipsam molestias in!</p>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                title
              </th>
              <th scope="col" className="px-6 py-3">
                body
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data?.map((value, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {value?.id}
                  </th>
                  <td className="px-6 py-4">{value?.title}</td>
                  <td className="px-6 py-4">{value?.body}</td>
                  <td className="px-6 py-4">View</td>
                </tr>
              ))}
          </tbody>
        </table>
        {data.length <= 0 && (
          <h1 className="text-white text-center text-lg py-3 font-semibold">Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
