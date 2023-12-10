import { Table } from '@radix-ui/themes';

export default async function RenderTable({data}) {
  if (!data || !data[0]) return null
  const headers = Object?.keys(data[0])
  return (
    <div className="p-4">
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {headers.map((name, idx) => (
              <Table.ColumnHeaderCell key={idx}>{name}</Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((dset, idx) => (
            <Table.Row key={idx}>
              {headers.map((name, idx) => (
                <Table.Cell key={idx}>{dset[name]}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
