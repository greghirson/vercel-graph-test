
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-07 20:10:00", "b": 716.25}, {"a": "2024-11-07 20:15:00", "b": 713.0}, {"a": "2024-11-07 20:20:00", "b": 699.0}, {"a": "2024-11-07 20:25:00", "b": 688.5}, {"a": "2024-11-07 20:30:00", "b": 694.75}, {"a": "2024-11-07 20:35:00", "b": 693.8}, {"a": "2024-11-07 20:40:00", "b": 698.0}, {"a": "2024-11-07 20:45:00", "b": 687.0}, {"a": "2024-11-07 20:50:00", "b": 681.0}, {"a": "2024-11-07 20:55:00", "b": 690.0}, {"a": "2024-11-07 21:00:00", "b": 670.75}, {"a": "2024-11-07 21:05:00", "b": 681.5}, {"a": "2024-11-07 21:10:00", "b": 687.0}, {"a": "2024-11-07 21:15:00", "b": 698.8}, {"a": "2024-11-07 21:20:00", "b": 695.25}, {"a": "2024-11-07 21:25:00", "b": 675.0}, {"a": "2024-11-07 21:30:00", "b": 687.8}, {"a": "2024-11-07 21:35:00", "b": 667.25}, {"a": "2024-11-07 21:40:00", "b": 671.2}, {"a": "2024-11-07 21:45:00", "b": 686.0}, {"a": "2024-11-07 21:50:00", "b": 702.5}, {"a": "2024-11-07 21:55:00", "b": 722.6}, {"a": "2024-11-07 22:00:00", "b": 735.5}, {"a": "2024-11-07 22:05:00", "b": 729.0}, {"a": "2024-11-07 22:10:00", "b": 733.2}, {"a": "2024-11-07 22:15:00", "b": 737.6}, {"a": "2024-11-07 22:20:00", "b": 737.6}, {"a": "2024-11-07 22:25:00", "b": 732.75}, {"a": "2024-11-07 22:30:00", "b": 730.2}, {"a": "2024-11-07 22:35:00", "b": 740.4}, {"a": "2024-11-07 22:40:00", "b": 762.25}, {"a": "2024-11-07 22:45:00", "b": 760.6}, {"a": "2024-11-07 22:50:00", "b": 740.8}, {"a": "2024-11-07 22:55:00", "b": 727.4}, {"a": "2024-11-07 23:00:00", "b": 702.2}, {"a": "2024-11-07 23:05:00", "b": 675.4}, {"a": "2024-11-07 23:10:00", "b": 685.4}, {"a": "2024-11-07 23:15:00", "b": 703.2}, {"a": "2024-11-07 23:20:00", "b": 732.4}, {"a": "2024-11-07 23:25:00", "b": 753.6}, {"a": "2024-11-07 23:30:00", "b": 757.2}, {"a": "2024-11-07 23:35:00", "b": 756.6666666666666}, {"a": "2024-11-07 23:40:00", "b": 761.6666666666666}, {"a": "2024-11-07 23:45:00", "b": 758.75}, {"a": "2024-11-07 23:50:00", "b": 762.75}, {"a": "2024-11-07 23:55:00", "b": 757.4}, {"a": "2024-11-08 00:00:00", "b": 740.0}, {"a": "2024-11-08 00:05:00", "b": 709.0}, {"a": "2024-11-08 00:10:00", "b": 694.8}, {"a": "2024-11-08 00:15:00", "b": 684.6}, {"a": "2024-11-08 00:20:00", "b": 671.0}, {"a": "2024-11-08 00:25:00", "b": 667.5}, {"a": "2024-11-08 00:30:00", "b": 654.5}, {"a": "2024-11-08 00:35:00", "b": 639.6}, {"a": "2024-11-08 00:40:00", "b": 629.2}, {"a": "2024-11-08 00:45:00", "b": 626.0}, {"a": "2024-11-08 00:50:00", "b": 629.2}, {"a": "2024-11-08 00:55:00", "b": 621.8}, {"a": "2024-11-08 01:00:00", "b": 611.75}, {"a": "2024-11-08 01:05:00", "b": 611.0}, {"a": "2024-11-08 01:10:00", "b": 613.4}, {"a": "2024-11-08 01:15:00", "b": 597.2}, {"a": "2024-11-08 01:20:00", "b": 577.8}, {"a": "2024-11-08 01:25:00", "b": 581.2}, {"a": "2024-11-08 01:30:00", "b": 575.5}, {"a": "2024-11-08 01:35:00", "b": 564.4}, {"a": "2024-11-08 01:40:00", "b": 561.8}, {"a": "2024-11-08 01:45:00", "b": 577.5}, {"a": "2024-11-08 01:50:00", "b": 576.6}, {"a": "2024-11-08 01:55:00", "b": 576.0}, {"a": "2024-11-08 02:00:00", "b": 579.25}, {"a": "2024-11-08 02:05:00", "b": 585.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    