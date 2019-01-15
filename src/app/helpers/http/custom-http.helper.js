export default function request({
  url,
  method,
  data,
  redirect_url,
  dataType,
  headers,
  auth,
}) {
  let customHeaders = headers || {
    'Content-Type': 'application/json',
  };

  if (!('Authorization' in customHeaders)) {
    customHeaders = Object.assign({
      Authorization: auth,
    }, customHeaders);
  }

  return {
    url: `http://localhost:8888/${url}`,
    method: method || 'GET',
    data: data || '',
    redirect_url,
    dataType: dataType || 'json',
    headers: customHeaders,
  };
}
