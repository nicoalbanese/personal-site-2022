export type Investment = {
  name: string;
  website: string;
  description: string;
};

const fetchAirtable = async () => {
  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`
  );
  myHeaders.append("Cookie", "brw=brwy1TrDiZyNAsU5u");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const AIRTABLE_URL = `https://api.airtable.com/v0/appbJWJIWeGgIsTg4/Companies?view=${encodeURI(
    "TrackRecordAPI"
  )}`;
  console.log(AIRTABLE_URL);

  // AIRTABLE_URL = urlWithoutSort;
  const res = await fetch(AIRTABLE_URL, requestOptions as RequestInit);
  // console.log(res);
  const data = await res.json();
  return data;
};

export const fetchInvestments = async () => {
  const data = await fetchAirtable();
  //   return data;

  const structuredData = data.records.map((company: any): Investment => {
    return {
      name: company.fields["Company Name"],
      website: company.fields["Website"] ? company.fields["Website"] : "/investments",
      description: company.fields["one_line_desc"],
    };
  });



  return structuredData as Investment[];
};
