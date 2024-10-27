
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-26 23:00:00", "b": 752.0}, {"a": "2024-10-26 23:05:00", "b": 756.75}, {"a": "2024-10-26 23:10:00", "b": 754.8}, {"a": "2024-10-26 23:15:00", "b": 751.8}, {"a": "2024-10-26 23:20:00", "b": 742.0}, {"a": "2024-10-26 23:25:00", "b": 758.8}, {"a": "2024-10-26 23:30:00", "b": 753.0}, {"a": "2024-10-26 23:35:00", "b": 737.25}, {"a": "2024-10-26 23:40:00", "b": 738.4}, {"a": "2024-10-26 23:45:00", "b": 727.8}, {"a": "2024-10-26 23:50:00", "b": 732.4}, {"a": "2024-10-26 23:55:00", "b": 733.0}, {"a": "2024-10-27 00:00:00", "b": 735.4}, {"a": "2024-10-27 00:05:00", "b": 733.6666666666666}, {"a": "2024-10-27 00:10:00", "b": 736.5}, {"a": "2024-10-27 00:15:00", "b": 734.5}, {"a": "2024-10-27 00:20:00", "b": 722.8}, {"a": "2024-10-27 00:25:00", "b": 715.5}, {"a": "2024-10-27 00:30:00", "b": 728.0}, {"a": "2024-10-27 00:35:00", "b": 730.75}, {"a": "2024-10-27 00:40:00", "b": 711.5}, {"a": "2024-10-27 00:45:00", "b": 704.5}, {"a": "2024-10-27 00:50:00", "b": 706.0}, {"a": "2024-10-27 00:55:00", "b": 706.6666666666666}, {"a": "2024-10-27 01:00:00", "b": 705.5}, {"a": "2024-10-27 01:05:00", "b": 711.0}, {"a": "2024-10-27 01:10:00", "b": 706.0}, {"a": "2024-10-27 01:15:00", "b": 705.0}, {"a": "2024-10-27 01:20:00", "b": 708.4}, {"a": "2024-10-27 01:25:00", "b": 696.5}, {"a": "2024-10-27 01:30:00", "b": 694.25}, {"a": "2024-10-27 01:35:00", "b": 697.75}, {"a": "2024-10-27 01:40:00", "b": 690.0}, {"a": "2024-10-27 01:45:00", "b": 682.6}, {"a": "2024-10-27 01:50:00", "b": 692.0}, {"a": "2024-10-27 01:55:00", "b": 691.0}, {"a": "2024-10-27 02:00:00", "b": 683.25}, {"a": "2024-10-27 02:05:00", "b": 689.6}, {"a": "2024-10-27 02:10:00", "b": 686.5}, {"a": "2024-10-27 02:15:00", "b": 690.8}, {"a": "2024-10-27 02:20:00", "b": 686.6666666666666}, {"a": "2024-10-27 02:25:00", "b": 692.3333333333334}, {"a": "2024-10-27 02:30:00", "b": 681.0}, {"a": "2024-10-27 02:35:00", "b": 676.0}, {"a": "2024-10-27 02:40:00", "b": 673.5}, {"a": "2024-10-27 02:45:00", "b": 672.25}, {"a": "2024-10-27 02:50:00", "b": 676.2}, {"a": "2024-10-27 02:55:00", "b": 673.2}, {"a": "2024-10-27 03:00:00", "b": 644.0}, {"a": "2024-10-27 03:05:00", "b": 669.4}, {"a": "2024-10-27 03:10:00", "b": 664.0}, {"a": "2024-10-27 03:15:00", "b": 660.25}, {"a": "2024-10-27 03:20:00", "b": 661.6}, {"a": "2024-10-27 03:25:00", "b": 650.5}, {"a": "2024-10-27 03:30:00", "b": 652.2}, {"a": "2024-10-27 03:35:00", "b": 647.25}, {"a": "2024-10-27 03:40:00", "b": 645.0}, {"a": "2024-10-27 03:45:00", "b": 646.75}, {"a": "2024-10-27 03:50:00", "b": 644.6666666666666}, {"a": "2024-10-27 03:55:00", "b": 646.25}, {"a": "2024-10-27 04:00:00", "b": 647.25}, {"a": "2024-10-27 04:05:00", "b": 644.6666666666666}, {"a": "2024-10-27 04:10:00", "b": 642.0}, {"a": "2024-10-27 04:15:00", "b": 641.0}, {"a": "2024-10-27 04:20:00", "b": 646.5}, {"a": "2024-10-27 04:25:00", "b": 638.4}, {"a": "2024-10-27 04:30:00", "b": 645.25}, {"a": "2024-10-27 04:35:00", "b": 645.6}, {"a": "2024-10-27 04:40:00", "b": 634.4}, {"a": "2024-10-27 04:45:00", "b": 631.0}, {"a": "2024-10-27 04:50:00", "b": 636.75}, {"a": "2024-10-27 04:55:00", "b": 625.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    