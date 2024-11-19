
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-18 19:00:00", "b": 707.25}, {"a": "2024-11-18 19:05:00", "b": 714.6}, {"a": "2024-11-18 19:10:00", "b": 725.25}, {"a": "2024-11-18 19:15:00", "b": 720.2}, {"a": "2024-11-18 19:20:00", "b": 700.0}, {"a": "2024-11-18 19:25:00", "b": 691.0}, {"a": "2024-11-18 19:30:00", "b": 701.2}, {"a": "2024-11-18 19:35:00", "b": 702.4}, {"a": "2024-11-18 19:40:00", "b": 685.75}, {"a": "2024-11-18 19:45:00", "b": 695.8}, {"a": "2024-11-18 19:50:00", "b": 705.3333333333334}, {"a": "2024-11-18 19:55:00", "b": 706.5}, {"a": "2024-11-18 20:00:00", "b": 697.25}, {"a": "2024-11-18 20:05:00", "b": 713.4}, {"a": "2024-11-18 20:10:00", "b": 723.25}, {"a": "2024-11-18 20:15:00", "b": 733.8}, {"a": "2024-11-18 20:20:00", "b": 766.25}, {"a": "2024-11-18 20:25:00", "b": 768.0}, {"a": "2024-11-18 20:30:00", "b": 746.6}, {"a": "2024-11-18 20:35:00", "b": 744.75}, {"a": "2024-11-18 20:40:00", "b": 759.6}, {"a": "2024-11-18 20:45:00", "b": 756.6666666666666}, {"a": "2024-11-18 20:50:00", "b": 740.2}, {"a": "2024-11-18 20:55:00", "b": 736.4}, {"a": "2024-11-18 21:00:00", "b": 729.6666666666666}, {"a": "2024-11-18 21:05:00", "b": 722.6}, {"a": "2024-11-18 21:10:00", "b": 722.8}, {"a": "2024-11-18 21:15:00", "b": 717.75}, {"a": "2024-11-18 21:20:00", "b": 718.8}, {"a": "2024-11-18 21:25:00", "b": 711.25}, {"a": "2024-11-18 21:30:00", "b": 718.6}, {"a": "2024-11-18 21:35:00", "b": 719.6}, {"a": "2024-11-18 21:40:00", "b": 707.3333333333334}, {"a": "2024-11-18 21:45:00", "b": 712.4}, {"a": "2024-11-18 21:50:00", "b": 698.6}, {"a": "2024-11-18 21:55:00", "b": 689.5}, {"a": "2024-11-18 22:00:00", "b": 679.75}, {"a": "2024-11-18 22:05:00", "b": 678.0}, {"a": "2024-11-18 22:10:00", "b": 690.2}, {"a": "2024-11-18 22:15:00", "b": 686.0}, {"a": "2024-11-18 22:20:00", "b": 684.0}, {"a": "2024-11-18 22:25:00", "b": 695.75}, {"a": "2024-11-18 22:30:00", "b": 699.4}, {"a": "2024-11-18 22:35:00", "b": 681.2}, {"a": "2024-11-18 22:40:00", "b": 668.3333333333334}, {"a": "2024-11-18 22:45:00", "b": 675.4}, {"a": "2024-11-18 22:50:00", "b": 679.0}, {"a": "2024-11-18 22:55:00", "b": 669.0}, {"a": "2024-11-18 23:00:00", "b": 663.4}, {"a": "2024-11-18 23:05:00", "b": 668.8}, {"a": "2024-11-18 23:10:00", "b": 658.6}, {"a": "2024-11-18 23:15:00", "b": 658.6}, {"a": "2024-11-18 23:20:00", "b": 656.0}, {"a": "2024-11-18 23:25:00", "b": 647.6}, {"a": "2024-11-18 23:30:00", "b": 651.0}, {"a": "2024-11-18 23:35:00", "b": 637.0}, {"a": "2024-11-18 23:40:00", "b": 634.4}, {"a": "2024-11-18 23:45:00", "b": 632.25}, {"a": "2024-11-18 23:50:00", "b": 630.6}, {"a": "2024-11-18 23:55:00", "b": 629.0}, {"a": "2024-11-19 00:00:00", "b": 634.25}, {"a": "2024-11-19 00:05:00", "b": 638.5}, {"a": "2024-11-19 00:10:00", "b": 628.75}, {"a": "2024-11-19 00:15:00", "b": 623.6}, {"a": "2024-11-19 00:20:00", "b": 629.4}, {"a": "2024-11-19 00:25:00", "b": 620.4}, {"a": "2024-11-19 00:30:00", "b": 615.6}, {"a": "2024-11-19 00:35:00", "b": 605.5}, {"a": "2024-11-19 00:40:00", "b": 611.75}, {"a": "2024-11-19 00:45:00", "b": 612.8}, {"a": "2024-11-19 00:50:00", "b": 609.0}, {"a": "2024-11-19 00:55:00", "b": 614.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    