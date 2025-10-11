import { getData } from "@/api/testAxios";
import { useQuery } from "@tanstack/react-query";

export const useTest = () => {

    const nowPlaying  = useQuery({
        queryKey: ['now-playing'],
        queryFn: () => getData<any>('/posts'),
        staleTime: 1000 * 60 * 60, // 1 hour
    });

    return { nowPlaying };
}
