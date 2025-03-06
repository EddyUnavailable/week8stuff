import pg from "pg";
import Image from "next/image";

export default async function Page({params}) {
  // await params returns an object like this: {id : 2}
  // destructuring the id out.
  const {id} = await params;

  const db = new pg.Pool({connectionString: process.env.DB_CONN});
  const res = await db.query(`SELECT * FROM ships WHERE id = $1`, [id]);
  const ships = res.rows[0];

  console.log(res);
  return (
    <div>
      <p>hi</p>
      <h2>{ships.name}</h2>
      <p>{ships.country}</p>
      <Image height={500} width={350} alt={ships.title} src={ships.img_url} />
      <p>{ships.launchdate}</p>
    </div>
  );
}

// All page.js file get an object with {params: '', searchParams: ''}
