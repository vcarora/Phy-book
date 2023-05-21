package com.vc.pradeepphysicsclass11.Activities;

import android.os.Bundle;
import android.view.MenuItem;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;

import com.pdfview.PDFView;
import com.vc.pradeepphysicsclass11.R;

/* created by ashbatra in June 2019 */

public class PdfActivity extends AppCompatActivity {
    PDFView pdfView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pdf);
        String chpname = getIntent().getStringExtra("chapter");

        ActionBar actionBar = getSupportActionBar();
        actionBar.setTitle(chpname);

        actionBar.setDisplayHomeAsUpEnabled(true);
        String num = getIntent().getStringExtra("number");
        String book = getIntent().getStringExtra("book");

        String filename = namecreate(book,num);

        pdfView = (PDFView) findViewById(R.id.v_pdf);
        pdfView.fromAsset(filename)
        .show();

    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        if(item.getItemId()==android.R.id.home) {
            finish();
        }
        return super.onOptionsItemSelected(item);
    }

    private String namecreate(String bookname, String chpnum) {
        //the files are saved in the format b1ch12 for book1, chapter 12
        String filename = "b"+bookname+"ch"+chpnum+".pdf";
        return filename;
    }
}


