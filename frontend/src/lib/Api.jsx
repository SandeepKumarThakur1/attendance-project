import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/Context/AuthProvider";
import { Axios } from "./Axios";

export const useLogin = () => {
  const { setUser, setLoading } = useAuth();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async ({ email, password }) => {
      setLoading(true);
      const response = await Axios.post("/auth/login", { email, password });
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(`${data.message}😐`);
      setLoading(false);
      setUser(data.employee);
      localStorage.setItem("auth", data.token);
      navigate("/");
    },

    onError: (error) => {
      setLoading(false);
      toast.error(`${error.response.data.message}😐`);
    },
  });
};

export const useCreate = () => {
  const { user, SetChange } = useAuth();
  return useMutation({
    mutationFn: async ({ formData, path }) => {
      const response = await Axios.post(path, {
        id: user._id,
        ...formData
      });
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(`${data.message}🫡`);
      SetChange(true);
    },
    onError:(err) =>{
      console.log(err)
      toast.error(`${err.response.data.message || err.response.data.error[0].message}🫡`);
    }
  });
};

export const useAttendanceRecord = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["AttendanceRecord"],
    queryFn: async () => {
      try {
        const response = await Axios.get(`/attendance/${user?._id}`);
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};

export const useLeaveRecord = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["LeaveRecord"],
    queryFn: async () => {
      try {
        const response = await Axios.get(`/leave/${user?._id}`);
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};

export const useAllEmployees = () => {
  return useQuery({
    queryKey: ["AllEmployees"],
    queryFn: async () => {
      try {
        const response = await Axios.get(`/employees`);
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};

export const useAllLeaves = () => {
  return useQuery({
    queryKey: ["AllLeaves"],
    queryFn: async () => {
      try {
        const response = await Axios.get(`/leave`);
        console.log(response)
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};
