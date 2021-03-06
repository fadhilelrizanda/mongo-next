import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import React from "react";

export default function Motor() {
  const [post, setPost] = React.useState(null);
  var moment = require("moment");
  React.useEffect(() => {
    axios
      .get(`https://testexpressjsiot.herokuapp.com/subscribers`)
      .then((data) => {
        const dataList = data.data;
        setPost(dataList);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }, []);
  let no = 0;
  if (!post) return null;
  console.log(post);
  return (
    <div className={styles.container}>
      <Head>
        <title>Test JS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossOrigin="anonymous"
        />
      </Head>

      <main className={styles.main}>
        {post.map((data) => {
          return (
            <div key={data.id}>
              <button
                key={data.id}
                type="button"
                className="btn btn-primary mt-5"
              >
                {moment(data.subscribeDate).format("MMMM Do YYYY, h:mm:ss:SSS")}
              </button>

              <table key={data.id} className="table mt-5">
                <thead key={data.id}>
                  <tr key={data.id}>
                    <th key={data.id} scope="col">
                      Sensor1
                    </th>
                    <th key={data.id} scope="col">
                      Sensor2
                    </th>
                    <th key={data.id} scope="col">
                      Sensor3
                    </th>
                    <th key={data.id} scope="col">
                      Sensor4
                    </th>
                    <th key={data.id} scope="col">
                      Sensor5
                    </th>
                    <th key={data.id} scope="col">
                      Sensor6
                    </th>
                    <th key={data.id} scope="col">
                      Sensor7
                    </th>
                    <th key={data.id} scope="col">
                      Sensor8
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={data.id}>
                    {data.baris1.map((datasensor) => {
                      return <td key={datasensor.id}>{datasensor}</td>;
                    })}
                  </tr>
                  <tr>
                    {data.baris2.map((datasensor) => {
                      return <td key={datasensor.id}>{datasensor}</td>;
                    })}
                  </tr>
                  <tr key={data.id}>
                    {data.baris3.map((datasensor) => {
                      return <td key={datasensor.id}>{datasensor}</td>;
                    })}
                  </tr>
                  <tr key={data.id}>
                    {data.baris4.map((datasensor) => {
                      return <td key={datasensor.id}>{datasensor}</td>;
                    })}
                  </tr>
                  <tr key={data.id}>
                    {data.baris5.map((datasensor) => {
                      return <td key={datasensor.id}>{datasensor}</td>;
                    })}
                  </tr>
                  <tr key={data.id}>
                    {data.baris6.map((datasensor) => {
                      return <td key={datasensor.id}>{datasensor}</td>;
                    })}
                  </tr>
                  <tr key={data.id}>
                    {data.baris7.map((datasensor) => {
                      return <td key={datasensor.id}>{datasensor}</td>;
                    })}
                  </tr>
                  <tr key={data.id}>
                    {data.baris8.map((datasensor) => {
                      return <td key={datasensor.id}>{datasensor}</td>;
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
