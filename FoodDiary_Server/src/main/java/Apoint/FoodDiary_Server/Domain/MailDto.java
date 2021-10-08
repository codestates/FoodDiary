package Apoint.FoodDiary_Server.Domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
public class MailDto {
    private String address;
    private String guestName;

    public String getAddress() { return address; }

    public void setAddress(String address) { this.address = address; }

    public String getGuestName() { return guestName; }

    public void setGuestName(String guestName) { this.guestName = guestName; }
}
