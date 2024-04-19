import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { BackendUrl } from "../../assets/FrontendUtils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

const Chart = () => {
  const [myBlogs, setMyBlogs] = useState([]);
  useEffect(() => {
    const fetchMyBlogs = async () => {
      let url = `${BackendUrl}/api/v1/blog/myblogs`
      const { data } = await axios.get(
        url  , 
        { withCredentials: true }
      );
      setMyBlogs(data.blogs);
    };
    fetchMyBlogs();
  }, []);

  const publishedBlogs =
    myBlogs && myBlogs.filter((blog) => blog.published === true);
  const notPublishedBlogs =
    myBlogs && myBlogs.filter((blog) => blog.published === false);

  const data = {
    labels: ["Published", "Not Published"],
    datasets: [
      {
        label: "Blogs",
        data: [
          publishedBlogs.length > 0 ? publishedBlogs.length : 0,
          notPublishedBlogs.length > 0 ? notPublishedBlogs.length : 0,
        ],
        borderColor: ["#0e7490", "#facc15"],
        backgroundColor: ["#0e7490", "#facc15"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex justify-center items-center  m-16">

    <section className="  flex flex-col items-center justify-center">
      <h3 className=" m-4 uppercase font-bold text-3xl">BLOG ANALYTICS</h3>
      <Doughnut data={data} className=" h-48 w-48 " />
    </section>
    </div>
  );
};

export default Chart;
