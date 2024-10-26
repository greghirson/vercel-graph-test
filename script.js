
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-25 18:10:00", "b": 533.6}, {"a": "2024-10-25 18:15:00", "b": 576.8}, {"a": "2024-10-25 18:20:00", "b": 587.0}, {"a": "2024-10-25 18:25:00", "b": 558.0}, {"a": "2024-10-25 18:30:00", "b": 548.4}, {"a": "2024-10-25 18:35:00", "b": 549.6666666666666}, {"a": "2024-10-25 18:40:00", "b": 540.0}, {"a": "2024-10-25 18:45:00", "b": 540.0}, {"a": "2024-10-25 18:50:00", "b": 553.8}, {"a": "2024-10-25 18:55:00", "b": 571.0}, {"a": "2024-10-25 19:00:00", "b": 564.5}, {"a": "2024-10-25 19:05:00", "b": 566.8}, {"a": "2024-10-25 19:10:00", "b": 603.8}, {"a": "2024-10-25 19:15:00", "b": 639.8}, {"a": "2024-10-25 19:20:00", "b": 653.2}, {"a": "2024-10-25 19:25:00", "b": 678.6}, {"a": "2024-10-25 19:30:00", "b": 686.0}, {"a": "2024-10-25 19:35:00", "b": 661.6}, {"a": "2024-10-25 19:40:00", "b": 676.0}, {"a": "2024-10-25 19:45:00", "b": 695.2}, {"a": "2024-10-25 19:50:00", "b": 682.0}, {"a": "2024-10-25 19:55:00", "b": 675.4}, {"a": "2024-10-25 20:00:00", "b": 668.25}, {"a": "2024-10-25 20:05:00", "b": 670.0}, {"a": "2024-10-25 20:10:00", "b": 683.0}, {"a": "2024-10-25 20:15:00", "b": 681.8}, {"a": "2024-10-25 20:20:00", "b": 689.0}, {"a": "2024-10-25 20:25:00", "b": 672.25}, {"a": "2024-10-25 20:30:00", "b": 667.0}, {"a": "2024-10-25 20:35:00", "b": 663.6}, {"a": "2024-10-25 20:40:00", "b": 628.0}, {"a": "2024-10-25 20:45:00", "b": 623.0}, {"a": "2024-10-25 20:50:00", "b": 620.8}, {"a": "2024-10-25 20:55:00", "b": 623.6666666666666}, {"a": "2024-10-25 21:00:00", "b": 622.75}, {"a": "2024-10-25 21:05:00", "b": 635.4}, {"a": "2024-10-25 21:10:00", "b": 652.25}, {"a": "2024-10-25 21:15:00", "b": 654.8}, {"a": "2024-10-25 21:20:00", "b": 660.6}, {"a": "2024-10-25 21:25:00", "b": 678.0}, {"a": "2024-10-25 21:30:00", "b": 667.6}, {"a": "2024-10-25 21:35:00", "b": 666.4}, {"a": "2024-10-25 21:40:00", "b": 696.4}, {"a": "2024-10-25 21:45:00", "b": 718.0}, {"a": "2024-10-25 21:50:00", "b": 717.0}, {"a": "2024-10-25 21:55:00", "b": 716.8}, {"a": "2024-10-25 22:00:00", "b": 711.75}, {"a": "2024-10-25 22:05:00", "b": 694.0}, {"a": "2024-10-25 22:10:00", "b": 676.4}, {"a": "2024-10-25 22:15:00", "b": 686.4}, {"a": "2024-10-25 22:20:00", "b": 698.5}, {"a": "2024-10-25 22:25:00", "b": 701.75}, {"a": "2024-10-25 22:30:00", "b": 694.8}, {"a": "2024-10-25 22:35:00", "b": 690.2}, {"a": "2024-10-25 22:40:00", "b": 678.3333333333334}, {"a": "2024-10-25 22:45:00", "b": 686.6666666666666}, {"a": "2024-10-25 22:50:00", "b": 689.6666666666666}, {"a": "2024-10-25 22:55:00", "b": 683.2}, {"a": "2024-10-25 23:00:00", "b": 678.2}, {"a": "2024-10-25 23:05:00", "b": 682.4}, {"a": "2024-10-25 23:10:00", "b": 676.8}, {"a": "2024-10-25 23:15:00", "b": 702.2}, {"a": "2024-10-25 23:20:00", "b": 720.2}, {"a": "2024-10-25 23:25:00", "b": 710.4}, {"a": "2024-10-25 23:30:00", "b": 702.25}, {"a": "2024-10-25 23:35:00", "b": 688.2}, {"a": "2024-10-25 23:40:00", "b": 680.6}, {"a": "2024-10-25 23:45:00", "b": 678.6}, {"a": "2024-10-25 23:50:00", "b": 683.0}, {"a": "2024-10-25 23:55:00", "b": 671.0}, {"a": "2024-10-26 00:00:00", "b": 664.75}, {"a": "2024-10-26 00:05:00", "b": 651.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    