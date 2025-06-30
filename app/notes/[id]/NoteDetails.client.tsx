`use client`;
import css from `./NoteDetails.module.css`;
import { useQuery } from `@tanstack/react-query`;
import { useParams } from "next/navigation";
import { fetchNoteById } from `@/lib/api`;

export default function NoteDetailsClient() {
    const { id } = useParams<{ id: string }>();

    const {
        data: note, isLoading, error,
    } = useQuery({
        queryKey: [`note`, id],
        queryFn: () => fetchNoteById(parseInt(id)),
        refetchOnMount: false,
    });

}