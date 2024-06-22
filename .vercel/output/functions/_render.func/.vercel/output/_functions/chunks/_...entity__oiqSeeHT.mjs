import { g as getProducts, a as getUsers } from './users_DxU4OUv3.mjs';

const endpointsToOperations = {
  products: getProducts,
  users: getUsers
};
function parseTypeParam(endpoint) {
  if (!endpoint || !(endpoint in endpointsToOperations)) return void 0;
  return endpoint;
}
const get = ({
  params
  /* , request */
}) => {
  console.log("Hit!", params.entity);
  const operationName = parseTypeParam(params.entity);
  if (!operationName) return new Response("404", { status: 404 });
  const body = endpointsToOperations[operationName]();
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};
function getStaticPaths() {
  return Object.keys(endpointsToOperations).map((endpoint) => ({
    params: { entity: endpoint }
  }));
}

export { endpointsToOperations, get, getStaticPaths };
