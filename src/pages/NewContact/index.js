import { PageHeader } from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

export function NewContact() {
  return (
    <>
      <PageHeader title="Editar Jander Liborio" />

      <Input type="text" placeholder="Nome" />

      <Select>
        <option value="111">instagram</option>
        <option value="1131">instagram</option>
        <option value="1115">instagram</option>
      </Select>

      <Button type="button" disabled>
        Salvar alterações
      </Button>
    </>
  );
}
