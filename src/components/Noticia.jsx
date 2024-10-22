import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

function Noticia({ id, avatarUrl, titulo, fecha, textoNoticia, imagenUrl, likes, altAvatar, altImagen }) {
  const [liked, setLiked] = useState(false);
  const [likesInPage, setLikesInPage] = useState(likes);
  const [open, setOpen] = useState(false);

  function handleClickLike() {
    setLiked(!liked);
    if (!liked) {
      setLikesInPage(likesInPage + 1);
    } else {
      setLikesInPage(likesInPage - 1);
    }
  }

  function handleClickShare() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleClickWhatsApp() {
    console.log("Enviando por Whatsapp...");
    handleClose();
  }

  function handleClickTelegram() {
    console.log("Enviando por Telegram...");
    handleClose();
  }

  return (
    <>
      <Card>
        <CardHeader
          avatar={<Avatar src={avatarUrl} alt={altAvatar}/>}
          title={titulo}
          subheader={fecha}
          action={<IconButton><MoreVertIcon /></IconButton>}
        />
        <CardMedia
          component="img"
          alt={altImagen}
          sx={{ height: 194 }}
          image={imagenUrl}
        />
        <CardContent>
          <Typography variant="body1" align="justify">
            {textoNoticia}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography variant="body2">{likesInPage}</Typography>
          <IconButton color="success" onClick={handleClickLike}>
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton disabled={!liked} onClick={handleClickShare}>
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle id="dialogTitle">
            {"COMPARTIR"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="dialogDescription">
              ¿A través de qué plataforma quieres compartir?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <IconButton onClick={handleClickWhatsApp}><WhatsAppIcon /></IconButton>
            <IconButton onClick={handleClickTelegram}><TelegramIcon /></IconButton>
          </DialogActions>
        </Dialog>
      </Card>
      <br />
    </>
  );
}

export default Noticia;