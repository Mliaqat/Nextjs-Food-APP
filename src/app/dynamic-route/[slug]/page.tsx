import React from "react";

function SlugPage({ params }: any) {
  return (
    <div>
      SlugPAge
      <h1>{params.slug}</h1>
    </div>
  );
}

export default SlugPage;
