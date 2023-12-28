import axiosHandler from "../../../common/handleAxiosRequests";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getUserByMonth(month: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>, setInfos: any) {
    setLoading(true);

    const response = await axiosHandler(`/users/period=${month}`, 'GET');
    setInfos(response.data);
    setLoading(false);
}