import EditNoteForm from "@/app/components/EditNoteForm";

export default function EditNotes({params}: {params:{id:string}}){
    return <EditNoteForm params={params}/>
}