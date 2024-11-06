
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-05 19:20:00", "b": 696.6666666666666}, {"a": "2024-11-05 19:25:00", "b": 713.2}, {"a": "2024-11-05 19:30:00", "b": 736.2}, {"a": "2024-11-05 19:35:00", "b": 737.6}, {"a": "2024-11-05 19:40:00", "b": 740.8}, {"a": "2024-11-05 19:45:00", "b": 758.2}, {"a": "2024-11-05 19:50:00", "b": 754.4}, {"a": "2024-11-05 19:55:00", "b": 776.2}, {"a": "2024-11-05 20:00:00", "b": 746.2}, {"a": "2024-11-05 20:05:00", "b": 735.0}, {"a": "2024-11-05 20:10:00", "b": 743.5}, {"a": "2024-11-05 20:15:00", "b": 758.5}, {"a": "2024-11-05 20:20:00", "b": 765.2}, {"a": "2024-11-05 20:25:00", "b": 754.6}, {"a": "2024-11-05 20:30:00", "b": 760.0}, {"a": "2024-11-05 20:35:00", "b": 771.2}, {"a": "2024-11-05 20:40:00", "b": 767.8}, {"a": "2024-11-05 20:45:00", "b": 746.0}, {"a": "2024-11-05 20:50:00", "b": 766.8}, {"a": "2024-11-05 20:55:00", "b": 771.0}, {"a": "2024-11-05 21:00:00", "b": 762.8}, {"a": "2024-11-05 21:05:00", "b": 752.6}, {"a": "2024-11-05 21:10:00", "b": 750.3333333333334}, {"a": "2024-11-05 21:15:00", "b": 747.2}, {"a": "2024-11-05 21:20:00", "b": 736.25}, {"a": "2024-11-05 21:25:00", "b": 725.8}, {"a": "2024-11-05 21:30:00", "b": 723.6}, {"a": "2024-11-05 21:35:00", "b": 722.2}, {"a": "2024-11-05 21:40:00", "b": 729.2}, {"a": "2024-11-05 21:45:00", "b": 708.75}, {"a": "2024-11-05 21:50:00", "b": 721.0}, {"a": "2024-11-05 21:55:00", "b": 703.8}, {"a": "2024-11-05 22:00:00", "b": 662.0}, {"a": "2024-11-05 22:05:00", "b": 660.75}, {"a": "2024-11-05 22:10:00", "b": 653.8}, {"a": "2024-11-05 22:15:00", "b": 653.6}, {"a": "2024-11-05 22:20:00", "b": 632.0}, {"a": "2024-11-05 22:25:00", "b": 638.25}, {"a": "2024-11-05 22:30:00", "b": 647.4}, {"a": "2024-11-05 22:35:00", "b": 640.4}, {"a": "2024-11-05 22:40:00", "b": 613.4}, {"a": "2024-11-05 22:45:00", "b": 602.75}, {"a": "2024-11-05 22:50:00", "b": 602.5}, {"a": "2024-11-05 22:55:00", "b": 585.6}, {"a": "2024-11-05 23:00:00", "b": 592.0}, {"a": "2024-11-05 23:05:00", "b": 591.2}, {"a": "2024-11-05 23:10:00", "b": 645.4}, {"a": "2024-11-05 23:15:00", "b": 670.2}, {"a": "2024-11-05 23:20:00", "b": 681.75}, {"a": "2024-11-05 23:25:00", "b": 696.6}, {"a": "2024-11-05 23:30:00", "b": 723.2}, {"a": "2024-11-05 23:35:00", "b": 709.8}, {"a": "2024-11-05 23:40:00", "b": 738.75}, {"a": "2024-11-05 23:45:00", "b": 762.2}, {"a": "2024-11-05 23:50:00", "b": 773.5}, {"a": "2024-11-05 23:55:00", "b": 774.0}, {"a": "2024-11-06 00:00:00", "b": 758.2}, {"a": "2024-11-06 00:05:00", "b": 702.0}, {"a": "2024-11-06 00:10:00", "b": 727.6}, {"a": "2024-11-06 00:15:00", "b": 708.2}, {"a": "2024-11-06 00:20:00", "b": 690.75}, {"a": "2024-11-06 00:25:00", "b": 703.0}, {"a": "2024-11-06 00:30:00", "b": 706.4}, {"a": "2024-11-06 00:35:00", "b": 703.3333333333334}, {"a": "2024-11-06 00:40:00", "b": 700.75}, {"a": "2024-11-06 00:45:00", "b": 738.4}, {"a": "2024-11-06 00:50:00", "b": 704.6}, {"a": "2024-11-06 00:55:00", "b": 707.6}, {"a": "2024-11-06 01:00:00", "b": 736.2}, {"a": "2024-11-06 01:05:00", "b": 697.0}, {"a": "2024-11-06 01:10:00", "b": 696.0}, {"a": "2024-11-06 01:15:00", "b": 717.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    