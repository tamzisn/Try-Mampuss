import { Box, Typography, Button, Avatar } from "@mui/material";
import { useState } from "react";
import EditAdministrator from "./EditAdministrator";
import AddAdministrator from "./AddAdministrator";
import { User, initialUsers } from "../assets/User";

interface AdministratorCardProps {
  user: User;
  onEdit?: (user: User) => void;
}

const AdministratorCard: React.FC<AdministratorCardProps> = (props) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [editAdministratorModal, setEditAdministratorModal] =
    useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <>
      {users.map((user) => (
        <Box
          key={user.id}
          sx={{
            width: "100%",
            height: "69px",
            // bgcolor: "#2C2C2C",
            background: "linear-gradient(5deg, #1D1D1D 0%, #2C2C2C 100%)",
            borderRadius: "15px",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {/* User Information */}
          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Avatar sx={{ width: 50, height: 50 }} />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "regular",
                fontSize: "24px",
                color: "#fff",
                width: "300px",
              }}
            >
              {user.name}
            </Typography>
            <Box
              sx={{ width: "1px", height: "44px", bgcolor: "#A9A9A9" }}
            ></Box>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                lineHeight: "1",
                fontWeight: "regular",
                fontSize: "24px",
                color: "#fff",
              }}
            >
              {user.email}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "30px", alignItems: "center" }}>
            <Box
              sx={{
                width: "212px",
                height: "41px",
                background: "linear-gradient(180deg, #5E60CE 10%, #5390D9 80%)",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "regular",
                  fontSize: "24px",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                {user.role}
              </Typography>
            </Box>
            {/* Button */}
            {/* Edit */}
            <Button
              onClick={() => {
                setEditAdministratorModal(true);
                setSelectedUser(user);
              }}
              sx={{
                padding: 0,
                minWidth: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/public/Button Edit User.svg"
                alt="Edit"
                style={{ width: "36px", height: "36px" }}
              />
            </Button>
          </Box>
        </Box>
      ))}

      {selectedUser && (
        <EditAdministrator
          open={editAdministratorModal}
          onClose={() => {
            setEditAdministratorModal(false);
            setSelectedUser(null);
          }}
          user={selectedUser}
        />
      )}
    </>
  );
};

export default AdministratorCard;
